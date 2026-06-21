import Visitor from '../models/Visitor.js';
import Contact from '../models/Contact.js';

// POST /api/analytics/visit
export const logVisit = async (req, res) => {
  try {
    await Visitor.create({
      page: req.body.page || '/',
      userAgent: req.headers['user-agent'],
      ipAddress: req.ip,
      referrer: req.headers.referer || '',
    });
    res.status(201).json({ success: true });
  } catch {
    // Silently fail - analytics should never break the app
    res.status(200).json({ success: false });
  }
};

// GET /api/analytics/stats (admin only)
export const getStats = async (req, res) => {
  try {
    const [total, today, week, contacts] = await Promise.all([
      Visitor.countDocuments(),
      Visitor.countDocuments({
        createdAt: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) },
      }),
      Visitor.countDocuments({
        createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
      }),
      Contact.countDocuments(),
    ]);
    res.json({ success: true, data: { total, today, week, contacts } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
