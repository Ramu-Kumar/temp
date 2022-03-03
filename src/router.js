import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./component/Common/footer";
import Header from "./component/Common/Header/header";
import GlobalSearch from './component/Common/Header/globalSearch'
import HomePage from "./component/Home/home";
import ConsumerComponent from "./component/ConsumerPolicy/consumerPolicy";
import TermsOfUse from "./component/TermsOfUse/termsOfUse";
import EducationalLanding from "./component/Educational/educationalLand";
import AboutUs from "./component/AboutUs/aboutUs";
import ContactUs from "./component/ContactUs/contactUs";
import FAQs from "./component/FAQs/faqPage";
import LegalDisclosure from "./component/LegalDisclosure/legalDisclosure";
import NotFound from "./component/NotFound404/notFound";
import Florida from "./component/Florida/florida";
import "./scss/_title_commonStyles.scss";

const Navigation = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/consumer" component={ConsumerComponent} />
        <Route path="/search" component={GlobalSearch} />
        <Route path="/termsOfUse" component={TermsOfUse} />
        <Route path="/legalDisclosure" component={LegalDisclosure} />
        <Route path="/elp*" component={EducationalLanding} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/florida" component={Florida} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Navigation;
