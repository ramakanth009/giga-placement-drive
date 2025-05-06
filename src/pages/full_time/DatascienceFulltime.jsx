import React from "react";
import Navbar from '../../components/common/navbar/Navbar'
import Footer from '../../components/common/footer/Footer'
import TestimonialComponent from "../../components/common/testimonialcomponent/TestimonialComponent";
import DataScienceIndustryFacts from "../../components/fulltime/datascience/industryfacts/DataScienceIndustryFacts";
import DataScienceProgramFee from "../../components/fulltime/datascience/programfee/DataScienceProgramFee";

const DatascienceFulltime = () => {
  return (
    <div>
      <Navbar />
      <DataScienceIndustryFacts />
      <DataScienceProgramFee />
      <TestimonialComponent /> 
      <Footer />
    </div>
  );
};

export default DatascienceFulltime;
