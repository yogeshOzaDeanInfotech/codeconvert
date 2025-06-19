import Image from "next/image";
import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://3383e6090f319b57d639638a227e779c.cdn.bubble.io/cdn-cgi/image/w=2048,h=,f=auto,dpr=1.25,fit=contain/f1726209367062x762410572142284600/J%26B_Login_Image_new.jpg')",
      }}
    >
      <div className="w-full max-w-md space-y-6 rounded bg-white p-6 shadow">
        <Image
          src="https://3383e6090f319b57d639638a227e779c.cdn.bubble.io/cdn-cgi/image/w=256,h=84,f=auto,dpr=1.25,fit=contain/f1717753890917x635282755308605000/jennings-and-barrett-logo.png"
          alt="Jennings & Barrett"
          width={208}
          height={68}
          className="mx-auto"
        />
        <LoginForm />
      </div>
    </main>
  );
}
