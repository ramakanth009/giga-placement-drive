import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import DataScienceImportance from "../../components/datasciencecomponents/datascienceimportance/DataScienceImportance";
import Footer from "../../components/common/footer/Footer";
import DataScienceFaq from "../../components/datasciencecomponents/datasciencefaq/DatascienceFaq";

const DataScience = () => {
  return (
    <div>
      <Navbar />
      <DataScienceImportance />
      <DataScienceFaq />
      <Footer />
    </div>
  );
};

export default DataScience;
