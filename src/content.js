import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
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
  const { data, isLoading } = useQuery({
    queryKey: ["content"],
    queryFn: fetchContent,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const content = data
    ? {
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
      }
    : {
        profile: defaultProfile,
        socials: defaultSocials,
        contact: defaultContact,
        about: defaultAbout,
        skills: defaultSkills,
        projects: defaultProjects,
        experience: defaultExperience,
      };

  return (
    <ContentContext.Provider value={{ ...content, loading: isLoading }}>
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