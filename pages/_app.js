import { Layout } from "@/components";
import { MembersProvider } from "@/context/membersProvider";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <MembersProvider>
      <Layout>
        <ToastContainer hideProgressBar />
        <Component {...pageProps} />
      </Layout>
    </MembersProvider>
  );
}
