'use strict';

const Response = require('../utils/response');
const errors = require('../utils/errors');
const logger = require('../utils/logger');

module.exports = {
  error,
  ok,
  table,
  notImplemented
};

function error (err, req, res, next) {
  if (err instanceof errors.AuthenticationError) {
    res.status(401).json(Response.error(401, 'Unauthorized'));
  } else if (err instanceof errors.AuthorizationError) {
    res.status(403).json(Response.error(403, 'Forbidden'));
  } else if (err instanceof errors.ValidationError) {
    res.status(422).json(Response.error(422, 'Validation error', err.errors()));
  } else if (err instanceof errors.NotFoundError) {
    res.status(404).json(Response.error(404, 'Not found'));
  } else if (err.code === 'EBADCSRFTOKEN') { // csurf middleware throws this, note the exclamation on err msg
    res.status(403).json(Response.error(403, 'Forbidden!'));
  } else {
    logger.error(err.stack);

    const status = err.status || 500;
    const error = (process.env.ENV === 'development') ? err : null;
    res.status(status).json(Response.error(status, 'Error', error));
  }
}

function ok (req, res, next) {
  res.status(200);
  res.end();
}

function notImplemented (req, res, next) {
  res.send(501).end();
}

function table (req, res, next) {
  const PAGE_LIMIT = 20;
  const sortColumn = req.query.sort_column;
  const sortOrder = req.query.sort_order;

  res.locals.sort = {
    column: sortColumn,
    order: sortOrder
  };

  let limit = +req.query.limit || PAGE_LIMIT;
  if (limit > PAGE_LIMIT || limit < 0) {
    limit = PAGE_LIMIT;
  }

  let offset = +req.query.offset || 0;
  if (offset < 0) {
    offset = 0;
  }

  res.locals.pagination = {
    offset: offset,
    limit: limit
  };

  next();
}
