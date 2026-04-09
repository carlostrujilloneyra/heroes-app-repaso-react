import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
/* import { SearchPage } from "@/heroes/pages/search/SearchPage"; */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/heroes/1",
        element: <HeroPage />,
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<span>Cargando...</span>}>
            <SearchPage />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminPage />,
  },
]);
