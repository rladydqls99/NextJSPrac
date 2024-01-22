import AcmeLogo from '../ui/acme-logo';
import LoginForm from '../ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="fkex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="md:w-26 w-32 text-white">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
