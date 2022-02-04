export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      configData: [
        {
          id: 1,
          maxValue: 10,
          noq: 2,
          operators: ["+", "-", "/", "*"],
        },
        {
          id: 2,
          maxValue: 10,
          noq: 20,
          operators: ["+", "-", "/", "*"],
        },
      ],
    });
  }
}
