import matplotlib.pyplot as plt

# 그래프 그리기
plt.figure()
plt.plot([1, 2, 3], [1000, 1500, 1200])
plt.title("점심 식비 추이")

# PDF로 저장
plt.savefig("lunch_expense_report.pdf")
