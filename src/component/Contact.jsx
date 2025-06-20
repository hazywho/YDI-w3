
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="flex flex-col items-center text-center">
        <AnimatedTitle
            title="Find us at the intersection of art and technology"
            containerClass="special-font !md:text-[6.2rem] w-full font-zentry !text-[90px] !font-black !leading-[.9] text-[#906436]"
          />
        <Button title="contact us" containerClass="mt-10 cursor-pointer mb-20" />
      </div>
    </div>
  );
};
export default Contact;
