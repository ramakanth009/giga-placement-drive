import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import DataScienceImportance from "../../components/datasciencecomponents/datascienceimportance/DataScienceImportance";
import Footer from "../../components/common/footer/Footer";
import DataScienceFaq from "../../components/datasciencecomponents/datasciencefaq/DatascienceFaq";
import ProgramWorksSection from "../../components/common/programworks/ProgramWorksSection";
import LimitedTimeOffer from "../../components/common/limitedtimeoffer/LimitedTimeOffer";
import { dataScienceItems } from "../../data/programWorksData";
import HiringPartners from "../../components/common/hiringpartners/HiringPartners";
import DataScienceCurriculum from "../../components/datasciencecomponents/curriculum/DataScienceCurriculum";

const DataScience = () => {
  return (
    <div>
      <Navbar />
      <DataScienceImportance />
      <DataScienceCurriculum />
      <HiringPartners />
      <LimitedTimeOffer />
      <ProgramWorksSection items={dataScienceItems} />
      <DataScienceFaq />
      <Footer />
    </div>
  );
};

export default DataScience;
