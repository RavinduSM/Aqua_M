import jwt from 'jsonwebtoken';

export const generateToken = (user) =>{
    return jwt.sign({
        _id: user._id, 
        name: user.name, 
        email: user.email, 
        // address: req.body.address,
        // telephone: req.body.telephone,
        isAdmin: user.isAdmin,
        // isExporter: user.isExporter,
        // isFarmer: iser.isFarmer,
        // image: req.body.image,
    }, process.env.JWT_SECRET || 'secret', //benefit of having alternative is u wont get errors not havin JWT in env folder
    {
        expiresIn: '30d',
    }
    ); // as this is a very secret file we use.env
};

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
      jwt.verify(
        token,
        process.env.JWT_SECRET || 'secret',
        (err, decode) => {
          if (err) {
            res.status(401).send({ message: 'Invalid Token' });
          } else {
            req.user = decode;
            next();
          }
        }
      );
    } else {
      res.status(401).send({ message: 'No Token' });
    }
  };

  export const isExporter = (req, res, next) => {
    if (req.user && req.user.isExporter) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Exporter Token' });
    }
  };

  export const isFarmer = (req, res, next) => {
    if (req.user && req.user.isFarmer) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Farmer Token' });
    }
  };