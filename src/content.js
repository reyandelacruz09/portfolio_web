import { createContext, useContext, useEffect, useState } from "react";
import { fetchContent } from "./api";
import {
  profile as defaultProfile,
  socials as defaultSocials,
  contact as defaultContact,
  about as defaultAbout,
  skills as defaultSkills,
  projects as defaultProjects,
  experience as defaultExperience,
} from "./data";

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState({
    profile: defaultProfile,
    socials: defaultSocials,
    contact: defaultContact,
    about: defaultAbout,
    skills: defaultSkills,
    projects: defaultProjects,
    experience: defaultExperience,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetchContent()
      .then((data) => {
        if (cancelled) return;
        setContent({
          profile: {
            name: data.name || defaultProfile.name,
            title: data.title || defaultProfile.title,
            tagline: data.tagline || defaultProfile.tagline,
            location: data.location || defaultProfile.location,
            photo: data.photo || defaultProfile.photo,
            resumeUrl: defaultProfile.resumeUrl,
          },
          socials: data.socials || defaultSocials,
          contact: data.contact || defaultContact,
          about: {
            paragraph1: data.about?.[0] || defaultAbout.paragraph1,
            paragraph2: data.about?.[1] || defaultAbout.paragraph2,
          },
          skills: data.skills || defaultSkills,
          projects: data.projects || defaultProjects,
          experience: data.experience || defaultExperience,
        });
      })
      .catch(() => {
        // Fall back to static data if the API is unreachable
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <ContentContext.Provider value={{ ...content, loading }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return ctx;
}
