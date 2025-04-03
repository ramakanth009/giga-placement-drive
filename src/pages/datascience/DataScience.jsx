import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import DataScienceFaq from "../../components/common/datasciencefaq/DatascienceFaq";

const DataScience = () => {
  return (
    <div>
      <Navbar />
      <DataScienceFaq />
      <Footer />
    </div>
  );
};

export default DataScience;
