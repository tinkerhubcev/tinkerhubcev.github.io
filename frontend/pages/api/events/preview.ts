export default function preview(req: any, res: { setPreviewData: (arg0: {}) => void; writeHead: (arg0: number, arg1: { Location: string; }) => void; end: () => void; }) {
  res.setPreviewData({});
  res.writeHead(307, { Location: "/events" });
  res.end();
}
