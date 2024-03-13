import ContactInfo from "../Components/ContactInfo";
import Contact_form from "../Components/Contact_form";

const ContactUs = () => {
  return (
    <div>
      <section className=" min-h-[50vh] relative contact_bgImg">
        <h2 className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-subHeadResponsive text-white text-shadow-default px-3 rounded-2xl     ">
          Reach Us
        </h2>
      </section>

      {/* Reach Us */}
      <section className="flex flex-row flex-wrap justify-center px-2 py-5 sm:gap-4 lg:gap-16 ">
        <ContactInfo />
        <Contact_form />
      </section>
    </div>
  );
};

export default ContactUs;
