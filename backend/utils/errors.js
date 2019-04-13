'use strict';

class AuthenticationError extends Error {}

class AuthorizationError extends Error {}

class ValidationError extends Error {
  constructor (mapped) {
    super();
    this.mapped = mapped;
  }

  errors () {
    return this.mapped;
  }
}

class NotFoundError extends Error {}

class ConflictError extends Error {}

class InvalidRequestError extends Error {}

module.exports = {
  AuthenticationError,
  AuthorizationError,
  ValidationError,
  NotFoundError,
  ConflictError,
  InvalidRequestError
};
