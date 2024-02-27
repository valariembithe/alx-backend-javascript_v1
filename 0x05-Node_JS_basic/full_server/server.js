import express from 'express';
import mapRoutes from './routes';

const app = express();

mapRoutes(app);
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

export default app;
module.exports = app;
