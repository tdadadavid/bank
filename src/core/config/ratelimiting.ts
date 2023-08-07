import rateLimit from "express-rate-limit";
import * as moment from "moment";

//TODO: work on the limiting.
export const globalRateLimiter = rateLimit({
  windowMs: moment().add(12, "hours").unix(), // 24 hrs in milliseconds
  max: 100,
  message: "You have exceeded the 100 requests in 24 hrs limit!",
  standardHeaders: true,
  legacyHeaders: false,
});

export const authRateLimiter = rateLimit({
  windowMs: moment().add(6, "hours").unix(), // 24 hrs in milliseconds
  max: 10,
  message: "You have exceeded the 10 requests in 24 hrs limit!",
  standardHeaders: true,
  legacyHeaders: false,
});

export const submitPrposalLimiter = rateLimit({
  windowMs: moment().add(6, "hours").unix(), // 24 hrs in milliseconds
  max: 20, // you can submit only 2 proposals in a day
  message: "You have exceeded the 10 requests in 24 hrs limit!",
  standardHeaders: true,
  legacyHeaders: false,
});
