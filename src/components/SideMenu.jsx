"use client";
import { createId } from "@/app/utils/doc.util";
import Link from "next/link";

const SideMenu = ({ activeSection, onLinkClick }) => {
  return (
    <div className="w-1/5">
      <div className="w-full p-4 sticky top-5 left-0">
        <h2 className="text-lg font-semibold mb-4">Documentation</h2>
        <ul className="space-y-7">
          {[
            "Introduction",
            "Understanding the Next.js Cache",
            "Signs You Need to Reset Your Cache",
            "Preparing to Reset the Cache",
            "Step-by-Step Guide to Resetting the Cache",
            "Reinstalling Dependencies",
            "Restarting the Next.js Server",
            "Post-Reset Considerations",
          ].map((item, index) => {
            const id = createId(item);
            return (
              <li
                onClick={() => onLinkClick(id)}
                key={index}
                className={
                  activeSection === id ? "font-bold text-blue-600" : ""
                }
              >
                <Link href={`/#${id}`}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
