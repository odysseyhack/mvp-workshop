import React, { Component } from 'react';

import "./SomethingWentWrongPage.css";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";

class SomethingWentWrongPage extends Component {
  render() {
    return (
      <RegularLayout>
        <h1>Izlega da ste došli došli do nepostojaće stranice!</h1>
      </RegularLayout>
    );
  }
}

export default SomethingWentWrongPage;