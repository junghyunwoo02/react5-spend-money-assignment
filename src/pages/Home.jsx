import { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import BoxContainer from "../components/BoxContainer";
import styled from "styled-components";
import ExpenseDetail from "../components/ExpenseDetail";
import { Link } from "react-router-dom";

const Home = ({ expenseData, setExpenseData }) => {
  const [activeIndex, setActiveIndex] = useState(() => {
    const savedMonth = localStorage.getItem("month");
    return savedMonth ? parseInt(savedMonth) : 1; // 기본값은 1월로 설정
  });

  useEffect(() => {
    localStorage.setItem("month", activeIndex);
  }, [activeIndex]);

  const handleClick = (idx) => {
    setActiveIndex(idx);
  };

  // 선택된 월에 해당하는 데이터 필터링
  const filteredData = expenseData.filter((item) => {
    const itemMonth = new Date(item.date).getMonth() + 1; // 월은 0부터 시작하므로 +1
    return itemMonth === activeIndex;
  });
  return (
    <StyledMain>
      <InputForm expenseData={expenseData} setExpenseData={setExpenseData} />
      <BoxContainer activeIndex={activeIndex} handleClick={handleClick} />
      <ExpenseDetail filteredData={filteredData} />
      <Link to={"/detail"}>Detail 페이지로 이동</Link>
    </StyledMain>
  );
};

export default Home;

const StyledMain = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px auto;
`;
