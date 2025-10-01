export const meta = () => {
  [
    { title: "HireFit | Auth" },
    { name: "description", content: "Log into your account" },
  ];
};

const Auth = () => {
  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10"></section>
      </div>
    </main>
  );
};

export default Auth;
