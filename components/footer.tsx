import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-4 lg:pt-12">
      <div className="container flex flex-col items-center justify-center gap-y-6">
        <Logo />
        <Socials />
        <p className="text-sm font-medium text-white">
          Copyright &copy; PizzaLand 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
