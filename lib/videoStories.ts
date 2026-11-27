/**
 * Video testimonials, served straight from Google Drive (not Cloudinary).
 * Source folder: https://drive.google.com/drive/folders/1eu7XB2Pp7drq83eIhi8h-R2PHU4fVHZx
 * Every file must be shared "Anyone with the link · Viewer" for the embed to play.
 *
 * size = the tile's footprint in the bento grid:
 *   big  2×2 · tall 1×2 · wide 2×1 · sm 1×1
 */

export type TileSize = "big" | "tall" | "wide" | "sm";

export type VideoStory = {
  id: string;
  name: string;
  size: TileSize;
};

export const driveThumb = (id: string, w = 800) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;
export const drivePreview = (id: string) =>
  `https://drive.google.com/file/d/${id}/preview`;

export const videoStories: VideoStory[] = [
  { id: "1vgfWy8nUuuS9nNGUk77CQVuu1VANet5L", name: "Student feedback", size: "big" },
  { id: "1uyyWvbZLKPa5gyhcomFmukMvG5w8t19t", name: "Kanika Kumaresh", size: "tall" },
  { id: "1RprF7p6v4P40IG7GKaUV2rsqV09KZgi5", name: "Senthilvel Vinayak", size: "wide" },
  { id: "1-KIPqBXIGM8SSBkIvcbcPRKHz5dWStaB", name: "Shreyas R", size: "tall" },
  { id: "1hIXffXvh2pY1gl70UYlf28TP7wUVY3Eo", name: "Anshika Kumar", size: "sm" },
  { id: "1YDa8_9rhDCSJEFJyJqGPPmWECkQ2WZPg", name: "Dhanusri Karthiselva", size: "sm" },

  { id: "1n31qsm0XRYxVxkzqjqFNS-UVpKKIuvqJ", name: "Akanksha Yadav", size: "big" },
  { id: "1vCszQ5yvXC_m0zf1-pu5t94L3yDOG0IV", name: "Rutvi Patel", size: "tall" },
  { id: "1bUy5QALDCsyimWUlRLNhyI9PBskAKJlC", name: "Tharunikaa Srinath", size: "wide" },
  { id: "1xXxQGYGMYkQpFWt6bFdJY1CQgQJRixTz", name: "Hannah", size: "tall" },
  { id: "10DWjGnMLhJ1mg22O69KNDJhQimg297wB", name: "Karanam Pramod", size: "sm" },
  { id: "1BPFZ3tXoBUjeCLLMSLy-LHO64TMD8TJ6", name: "Parvathy Nambiar", size: "sm" },

  { id: "1YQ_ruxN5jtzO8dZaOyqtM3vfpK6VhGEo", name: "Ayush Y", size: "tall" },
  { id: "129JGPWicsYnQtDpwBXzx4d2colFpnN8u", name: "Amogh Chivukula", size: "big" },
  { id: "18f8Moam5zcrEOkjZ9B9eQE6zvD50KeA6", name: "Sahasra Sahu", size: "tall" },
  { id: "1Jd-1TXrjcg5iGA27dosL4fXgNBgUtrhM", name: "Justine Jiby", size: "wide" },
  { id: "1RTYXjPzoBF-I7-9mWLeZALRqBe07dBi6", name: "Smrithi", size: "sm" },
  { id: "1ipdXTdzQM9T-SJW0shonLq1LzedAexS_", name: "Praganya", size: "sm" },

  { id: "1iWdc5Srki_v9uEO2CqFSszL-V5RFi_lJ", name: "Ananya Balasubramanya", size: "tall" },
  { id: "1Et-l3ScgnW_2MjOBZ-NxKKYDhsTZ8DD8", name: "Khyati G", size: "tall" },
  { id: "10nAMQwABs6OLEhLBKUxUgqb7ji9c_ETd", name: "Satvik", size: "big" },
  { id: "1k2nJNrbsZbchWaUo1DERRVi5HQxPwZOs", name: "Meekhal", size: "wide" },
  { id: "1uN6rvcvKioYZgrrVSWwrWCkWGidpziI9", name: "Vibha Nair", size: "sm" },
  { id: "1OSboCxYapnJ01wRz0ItNnhEeIHhUJLY2", name: "Vidhula", size: "sm" },

  { id: "1UyS4Zqo_kioBZDz-87ADtk5dbTQ8p53T", name: "Nysa", size: "sm" },
  { id: "1yIKEpx_aWVwko1p_8sUzl8ZfjmJ3A-G5", name: "A J Thejaswini", size: "tall" },
  { id: "1foflcAKHeHMZcPfk2VJDPLdAOQDxpt_s", name: "Ceanna Abarnbas", size: "big" },
  { id: "12Gm1iosRzXLCiW6AN8-oDmj6vJzKKwDk", name: "Likhith Bhardwaj", size: "big" },
  { id: "1hlusi-D2FaS0n-JU-uuXSn7Ibun-qiLj", name: "Moshika", size: "sm" },
  { id: "1El3G68W0DX0EjFXvoEIXCF8VO6L-oMcf", name: "Yogalaksmi SL", size: "wide" },

  { id: "19VndsqCmeN3oSSyceb6jCh2UHEbM5wu6", name: "Shreyas", size: "tall" },
  { id: "1tmAPHL393tfai1BrJ3_yuAfpW0YTaDMc", name: "More student feedback", size: "big" },
  { id: "11mPJXVzY_fFUSU6SWk27EwyBAhrszGMi", name: "Krithika", size: "tall" },
  { id: "1K7qPb-pBBOODfvdd1Wy9_hKwE4tC4hR3", name: "Gowri GR", size: "wide" },
];
