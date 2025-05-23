import React, {useState} from 'react';
import axios from "axios";

const API_URL = import.meta.env.VITE_API_AIR_URL;
const SERVICE_KEY = decodeURIComponent(import.meta.env.VITE_API_AIR_SERVICE_KEY);

function AirComponent(props) {
    const [airData, setAirData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getAir = async () => {
        try {
            setLoading(true);
            setError(null);

            const params = {
                serviceKey: SERVICE_KEY,
                ver: 1.5,
                pageNo: 1,
                numOfRows: 10,
                returnType: 'json',
                sidoName: '대구'
            }

            const result = await axios.get(API_URL, {params: params});
            setAirData(result.data.response.body);
            console.log(result);
        } catch (err) {
            setError('대기 정보를 가져오는 중 오류가 발생했습니다.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    // 공기질 등급에 따른 색상 클래스 반환
    const getGradeColorClass = (grade) => {
        switch (grade) {
            case "1": return "text-blue-600";
            case "2": return "text-green-600";
            case "3": return "text-yellow-600";
            case "4": return "text-red-600";
            default: return "text-gray-600";
        }
    };

    // 공기질 등급에 따른 텍스트 반환
    const getGradeText = (grade) => {
        switch (grade) {
            case "1": return "좋음";
            case "2": return "보통";
            case "3": return "나쁨";
            case "4": return "매우 나쁨";
            default: return "정보 없음";
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">대기 정보 조회</h1>
            <button
                className="bg-blue-500
          hover:bg-blue-600
          text-white font-semibold py-2 px-4
          shadow-md hover:shadow-lg
          transition-all duration-300
          ease-in-out
          transform hover:-translate-y-0.5
          focus:outline-none
          mb-6"
                onClick={getAir}
                disabled={loading}
            >
                {loading ? '로딩 중...' : '대기정보 가져오기'}
            </button>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            {airData && (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                            <th className="py-3 px-4 text-left">측정소</th>
                            <th className="py-3 px-4 text-left">지역</th>
                            <th className="py-3 px-4 text-left">측정시간</th>
                            <th className="py-3 px-4 text-left">미세먼지</th>
                            <th className="py-3 px-4 text-left">초미세먼지</th>
                            <th className="py-3 px-4 text-left">오존</th>
                            <th className="py-3 px-4 text-left">이산화질소</th>
                            <th className="py-3 px-4 text-left">일산화탄소</th>
                            <th className="py-3 px-4 text-left">이산화황</th>
                            <th className="py-3 px-4 text-left">통합대기환경지수</th>
                        </tr>
                        </thead>
                        <tbody>
                        {airData.items.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="py-2 px-4 border-b">{item.stationName}</td>
                                <td className="py-2 px-4 border-b">{item.sidoName}</td>
                                <td className="py-2 px-4 border-b">{item.dataTime}</td>
                                <td className="py-2 px-4 border-b">
                                    <div className="flex flex-col">
                                        <span>{item.pm10Value} ㎍/㎥</span>
                                        <span className={getGradeColorClass(item.pm10Grade)}>
                        {getGradeText(item.pm10Grade)}
                      </span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <div className="flex flex-col">
                                        <span>{item.pm25Value} ㎍/㎥</span>
                                        <span className={getGradeColorClass(item.pm25Grade)}>
                        {getGradeText(item.pm25Grade)}
                      </span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <div className="flex flex-col">
                                        <span>{item.o3Value} ppm</span>
                                        <span className={getGradeColorClass(item.o3Grade)}>
                        {getGradeText(item.o3Grade)}
                      </span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <div className="flex flex-col">
                                        <span>{item.no2Value} ppm</span>
                                        <span className={getGradeColorClass(item.no2Grade)}>
                        {getGradeText(item.no2Grade)}
                      </span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <div className="flex flex-col">
                                        <span>{item.coValue} ppm</span>
                                        <span className={getGradeColorClass(item.coGrade)}>
                        {getGradeText(item.coGrade)}
                      </span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <div className="flex flex-col">
                                        <span>{item.so2Value} ppm</span>
                                        <span className={getGradeColorClass(item.so2Grade)}>
                        {getGradeText(item.so2Grade)}
                      </span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <div className="flex flex-col">
                                        <span>{item.khaiValue}</span>
                                        <span className={getGradeColorClass(item.khaiGrade)}>
                        {getGradeText(item.khaiGrade)}
                      </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="mt-4 text-sm text-gray-600">
                        <p>* 총 {airData.totalCount}개의 측정소 중 {airData.numOfRows}개 표시</p>
                        <p>* 등급: 1-좋음, 2-보통, 3-나쁨, 4-매우 나쁨</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AirComponent;