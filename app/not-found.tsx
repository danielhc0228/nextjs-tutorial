import Navigation from "./components/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Not found",
};

export default function NotFound() {
    return (
        <>
            <h1>Not Found</h1>
        </>
    );
}
