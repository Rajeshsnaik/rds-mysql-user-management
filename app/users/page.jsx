"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/users", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch users.");
      }

      setUsers(data.users || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-8 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header Dashboard Area */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Database Records</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Live user roster fetched directly from Amazon DynamoDB
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 self-start sm:self-center"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add New User
          </Link>
        </div>

        {/* Global Loading View */}
        {loading && (
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <svg className="animate-spin h-6 w-6 text-blue-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Querying DynamoDB partition tables...
            </p>
          </div>
        )}

        {/* Error Alert Display */}
        {!loading && error && (
          <div className="rounded-lg border border-red-100 bg-red-50 p-4 text-sm font-medium text-red-600 dark:border-red-900/30 dark:bg-red-950/40 dark:text-red-400 flex items-center gap-2">
            <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            {error}
          </div>
        )}

        {/* Dynamic Clean Empty State */}
        {!loading && !error && users.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white/50 dark:bg-slate-900/50 p-12 text-center dark:border-slate-800">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-50">No users captured</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Get started by building a new user object inside your home form.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline gap-1"
              >
                Go to registration form
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        )}

        {/* Data Table View */}
        {!loading && !error && users.length > 0 && (
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
            {/* Table Meta Context */}
            <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800">
              <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">Active Registrations</h2>
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-950/40 dark:text-blue-400 dark:ring-blue-400/20">
                {users.length} Total {users.length === 1 ? "User" : "Users"}
              </span>
            </div>

            {/* Scroll Container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50/70 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:bg-slate-900/50 dark:border-slate-800 dark:text-slate-400">
                  <tr>
                    <th scope="col" className="px-6 py-3.5">
                      Username
                    </th>
                    <th scope="col" className="px-6 py-3.5">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3.5">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3.5">
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                  {users.map((user) => (
                    <tr
                      key={user.id || user.username}
                      className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/30"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900 dark:text-slate-50">
                        {user.username}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                      <td className="whitespace-nowrap px-6 py-4 font-mono text-xs tracking-tight text-slate-500 dark:text-slate-400">
                        {user.phoneNumber}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-xs text-slate-500 dark:text-slate-400">
                        {user.createdAt ? new Date(user.createdAt).toLocaleString() : "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
