import Newsletter from '../models/Newsletter.js';

// Subscribe to newsletter
export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, error: 'Email is required' });
    }

    // Check if email already exists
    const existingEmail = await Newsletter.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ success: false, error: 'Email already subscribed' });
    }

    const newsletter = await Newsletter.create({ email, status: 'active' });

    res.status(201).json({
      success: true,
      data: newsletter,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Get all newsletters
export const getNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.findAll({ order: [['createdAt', 'DESC']] });

    res.status(200).json({
      success: true,
      count: newsletters.length,
      data: newsletters,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Unsubscribe from newsletter
export const unsubscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    const newsletter = await Newsletter.findOne({ where: { email } });

    if (!newsletter) {
      return res.status(404).json({ success: false, error: 'Email not found' });
    }

    await newsletter.update({ status: 'inactive' });

    res.status(200).json({
      success: true,
      message: 'Successfully unsubscribed from newsletter',
      data: newsletter,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
