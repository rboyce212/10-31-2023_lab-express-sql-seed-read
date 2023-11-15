const checkName = (req, res, next) => {
  if (req.body.name) {
    // next() comes from the parameters
    // next() tells the route that this piece of middleware is satisfied and can move onto the next argument in the route.
    return next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkArtist = (req, res, next) => {
  if (req.body.artist) {
    return next();
  } else {
    res.status(400).json({ error: "Artist is required" });
  }
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

let maxYear = getCurrentYear();

const checkYear = (req, res, next) => {
  const fourDigitYear = req.body.year;
  if (
    fourDigitYear > 1949 &&
    fourDigitYear <= maxYear &&
    Number.isInteger(fourDigitYear) === true
  ) {
    next();
  } else {
    res.status(400).json({
      error:
        "Year must be a 4-digit integer equal to or less than the current year.",
    });
  }
};

const checkBoolean = (req, res, next) => {
  const fav = req.body.is_favorite;
  if (typeof fav === "boolean") {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be type of boolean" });
  }
};

module.exports = { checkName, checkArtist, checkYear, checkBoolean };
