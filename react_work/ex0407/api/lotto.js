export default async function handler(req, res) {
    const { drwNo } = req.query;

    const response = await fetch(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`);
    const data = await response.json();

    res.status(200).json(data);
}
