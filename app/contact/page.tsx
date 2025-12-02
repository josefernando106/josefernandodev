import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
} from "../components/icon";
import "./style.css";

export default function ContactPage() {
  return (
    <main className="background min-h-screen">
      <div className="flex justify-center p-6">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Contato:
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <span className="flex px-2 font-bold">
          <WhatsappIcon className="w-5 h-6 mr-2 text-green-500" />
          WhatsApp
          <a href=""></a>
        </span>
        <span className="flex px-2 font-bold">
          <LinkedinIcon className="w-5 h-6 mr-2 text-blue-700" />
          <a href="https://www.linkedin.com/in/jose-fernando-lima-da-silva/">
            LinkedIn
          </a>
        </span>
        <span className="flex px-2 font-bold">
          <GithubIcon className="w-5 h-6 mr-2" />
          <a href="https://github.com/josefernando106">Github</a>
        </span>
        <span className="flex px-2 font-bold">
          <EmailIcon className="w-5 h-6 mr-2 text-gray-700 " />
          <a href="mailto:jose.fernandodasilva@hotmail.com">Email</a>
        </span>
      </div>
    </main>
  );
}
