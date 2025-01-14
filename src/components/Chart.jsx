import { useEffect, useState } from "react"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,  } from 'recharts';

const Chart = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('readBook')
        const readBookData = JSON.parse(data);
        
        const newData = readBookData?.map(value => ({
            name: value?.bookName,
            uv: value?.totalPages,
            pv: value?.rating,
            amt: value?.yearOfPublishing
        }));

        setBooks(newData);
    },[])


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

      const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  return (
    <div className="overflow-auto flex items-center justify-center h-[calc(100vh-80px)]">
        {books ? <ResponsiveContainer width={700} height="100%">
            <BarChart width={1500} height={500} data={books} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }} >
            {books?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
            </Bar>
        </BarChart>
        </ResponsiveContainer> : <div className="text-5xl font-bold flex items-center justify-center h-[calc(100vh-80px)]"><h1>data is not available</h1></div>}
    </div>
  )
}

export default Chart