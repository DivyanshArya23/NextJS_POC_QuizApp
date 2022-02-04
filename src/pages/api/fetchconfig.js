export default function handler(req, res) {
  if (req.method === "GET") {
    console.log({
      req: req,
      api: "fetchconfig",
      method: req.method,
    });
    const payload = [
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
    ];
    console.log("returning from fetchconfig api with payload :", payload);
    res.status(200).json({
      configData: payload,
    });
  }
}
