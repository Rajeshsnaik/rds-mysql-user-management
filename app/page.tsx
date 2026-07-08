import UserForm from "./components/UserForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <div className="w-full max-w-md space-y-6">
        {/* Optional Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Welcome</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Please fill out the form below to get started.</p>
        </div>

        {/* Form Container Card */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <UserForm />
        </div>
      </div>
    </main>
  );
}
