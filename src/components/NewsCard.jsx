import { Card, CardContent } from "./ui/card";

export default function NewsCard(props) {
  return (
    <Card className=" shadow-sm cursor-pointer transition">
      <CardContent>
        <span className="text-xs text-orange-600 font-medium">{props.tag}</span>
        <h3 className={`font-semibold text-blue-800 mt-2 ${props?.first ? "text-2xl" : null}`}>{props.title}</h3>
      </CardContent>
    </Card>
  );
}
