import React, { useState } from "react";

export default function App() {
  const [price, setPrice] = useState<number>(0);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>J-in Interior 바로 견적 앱</h1>
      <p>간단한 견적 금액을 입력하고 확인하세요.</p>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="금액 입력"
        style={{ padding: "0.5rem", marginRight: "0.5rem" }}
      />
      <strong>{price.toLocaleString("ko-KR")} 원</strong>
    </div>
  );
}
