import React from 'react'

function Dashboard() {
    return (
      <div>
        <h1>대시보드</h1>
        <Outlet /> {/* 하위 라우트가 렌더링되는 위치 */}
      </div>
    );
  }

  export default Dashboard;