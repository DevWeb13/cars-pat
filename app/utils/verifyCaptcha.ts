"use server";

import axios from "axios";

export async function verifyCaptcha(token: string | null) {
  const res = await axios.post(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  if (res.data.success) {
    return "success!";
  } else {
    throw new Error("Failed Captcha");
  }
}
