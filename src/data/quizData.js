const quizData = [
    {
      title: "ProblemsOnTrains",
      question:
        "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
      options: ["120 metres", "180 metres", "324 metres", "150 metres"],
      correctAnswer: "120 metres",
    },
    {
      title: "ProblemsOnTrains",
      question:
        "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
      options: ["45 km/hr", "50 km/hr", "54 km/hr", "55 km/hr"],
      correctAnswer: "55 km/hr",
    },
    {
      title: "ProblemsOnTrains",
      question:
        "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
      options: ["200 m", "225 m", "245 m", "250 m"],
      correctAnswer: "245 m",
    },
    {
      title: "ProblemsOnTrains",
      question:
        "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
      options: ["1 : 3", "3 : 2", "3 : 4", "None of these"],
      correctAnswer: "3 : 4",
    },
    {
      title: "ProblemsOnTrains",
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: ["120 m", "240 m", "300 m", "None of these"],
      correctAnswer: "240 m",
    },
    {
      title: "HeightAndDistance",
      question:
        "Two ships are sailing in the sea on the two sides of a lighthouse. The angle of elevation of the top of the lighthouse is observed from the ships are 30° and 45° respectively. If the lighthouse is 100 m high, the distance between the two ships is:",
      options: ["173 m", "200 m", "273 m", "300 m"],
      correctAnswer: "173 m",
    },
    {
      title: "HeightAndDistance",
      question:
        "A man standing at a point P is watching the top of a tower, which makes an angle of elevation of 30° with the man's eye. The man walks some distance towards the tower to watch its top and the angle of the elevation becomes 60°. What is the distance between the base of the tower and the point P?",
      options: [
        "43 units",
        "8 units",
        "12 units",
        "Data inadequate",
        "None of these",
      ],
      correctAnswer: "12 units",
    },
    {
      title: "HeightAndDistance",
      question:
        "The angle of elevation of a ladder leaning against a wall is 60° and the foot of the ladder is 4.6 m away from the wall. The length of the ladder is:",
      options: ["2.3 m", "4.6 m", "7.8 m", "9.2 m"],
      correctAnswer: "9.2 m",
    },
    {
      title: "HeightAndDistance",
      question:
        "An observer 1.6 m tall is 203 away from a tower. The angle of elevation from his eye to the top of the tower is 30°. The height of the tower is:",
      options: ["21.6 m", "23.2 m", "24.72 m", "None of these"],
      correctAnswer: "23.2 m",
    },
    {
      title: "HeightAndDistance",
      question:
        "From a point P on a level ground, the angle of elevation of the top tower is 30°. If the tower is 100 m high, the distance of point P from the foot of the tower is:",
      options: ["149 m", "156 m", "173 m", "200 m"],
      correctAnswer: "173 m",
    },
    {
      title: "SimpleInterest",
      question:
        "A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:",
      options: ["Rs. 650", "Rs. 690", "Rs. 698", "Rs. 700"],
      correctAnswer: "Rs. 690",
    },
    {
      title: "SimpleInterest",
      question:
        "Mr. Thomas invested an amount of Rs. 13,900 divided in two different schemes A and B at the simple interest rate of 14% p.a. and 11% p.a. respectively. If the total amount of simple interest earned in 2 years be Rs. 3508, what was the amount invested in Scheme B?",
      options: ["Rs. 6400", "Rs. 6500", "Rs. 7200", "Rs. 7500", "None of these"],
      correctAnswer: "Rs. 7200",
    },
    {
      title: "SimpleInterest",
      question:
        "A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?",
      options: [
        "Rs. 4462.50",
        "Rs. 8032.50",
        "Rs. 8900",
        "Rs. 8925",
        "None of these",
      ],
      correctAnswer: "Rs. 8925",
    },
    {
      title: "SimpleInterest",
      question:
        "How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?",
      options: ["3.5 years", "4 years", "4.5 years", "5 years"],
      correctAnswer: "4.5 years",
    },
    {
      title: "SimpleInterest",
      question:
        "Reena took a loan of Rs. 1200 with simple interest for as many years as the rate of interest. If she paid Rs. 432 as interest at the end of the loan period, what was the rate of interest?",
      options: ["3.6", "6", "18", "Cannot be determined", "None of these"],
      correctAnswer: "6",
    },
    {
      title: "ProfitAndLoss",
      question:
        "Alfred buys an old scooter for Rs. 4700 and spends Rs. 800 on its repairs. If he sells the scooter for Rs. 5800, his gain percent is:",
      options: ["4%", "7%", "5%", "10%", "12%"],
      correctAnswer: "12%",
    },
    {
      title: "ProfitAndLoss",
      question:
        "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
      options: ["15", "16", "18", "25"],
      correctAnswer: "16",
    },
    {
      title: "ProfitAndLoss",
      question:
        "If selling price is doubled, the profit triples. Find the profit percent.",
      options: ["66 2/3%", "100%", "105 1/3%", "120%"],
      correctAnswer: "66 2/3%",
    },
    {
      title: "ProfitAndLoss",
      question:
        "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
      options: ["30%", "70%", "100%", "250%"],
      correctAnswer: "250%",
    },
    {
      title: "ProfitAndLoss",
      question:
        "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5",
    },
    {
      title: "Percentage",
      question:
        "A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?",
      options: ["45%", "45.5%", "54.6%", "55%"],
      correctAnswer: "45.5%",
    },
    {
      title: "Percentage",
      question:
        "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:",
      options: ["39, 30", "41, 32", "42, 33", "43, 34"],
      correctAnswer: "41, 32",
    },
    {
      title: "Percentage",
      question:
        "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
      options: ["588 apples", "600 apples", "672 apples", "700 apples"],
      correctAnswer: "700 apples",
    },
    {
      title: "Percentage",
      question:
        "What percentage of numbers from 1 to 70 have 1 or 9 in the unit's digit?",
      options: ["1%", "14%", "20%", "21%"],
      correctAnswer: "20%",
    },
    {
      title: "Percentage",
      question:
        "If A = x% of y and B = y% of x, then which of the following is true?",
      options: [
        "A is smaller than B.",
        "A is greater than B.",
        "Relationship between A and B cannot be determined.",
        "If x is smaller than y, then A is greater than B.",
        "None of these",
      ],
      correctAnswer: "Relationship between A and B cannot be determined.",
    },
    {
      title: "TimeAndDistance",
      question:
        "A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",
      options: ["3.6", "7.2", "8.4", "10"],
      correctAnswer: "7.2",
    },
    {
      title: "TimeAndDistance",
      question:
        "An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 hour, it must travel at a speed of:",
      options: ["300 kmph", "360 kmph", "600 kmph", "720 kmph"],
      correctAnswer: "720 kmph",
    },
    {
      title: "TimeAndDistance",
      question:
        "If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:",
      options: ["50 km", "56 km", "70 km", "80 km"],
      correctAnswer: "70 km",
    },
    {
      title: "TimeAndDistance",
      question:
        "A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is:",
      options: ["100 kmph", "110 kmph", "120 kmph", "130 kmph"],
      correctAnswer: "110 kmph",
    },
    {
      title: "TimeAndDistance",
      question:
        "Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?",
      options: ["9", "10", "12", "20"],
      correctAnswer: "10",
    },
    {
      title: "TimeAndWork",
      question:
        "A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is:",
      options: ["1/4", "1/10", "7/15", "8/15"],
      correctAnswer: "7/15",
    },
    {
      title: "TimeAndWork",
      question:
        "A can lay railway track between two given stations in 16 days and B can do the same job in 12 days. With help of C, they did the job in 4 days only. Then, C alone can do the job in:",
      options: ["9 1/5 days", "5 9/12 days", "9 2/5 days", "10 days"],
      correctAnswer: "9 1/5 days",
    },
    {
      title: "TimeAndWork",
      question:
        "A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?",
      options: ["12 days", "15 days", "16 days", "18 days"],
      correctAnswer: "12 days",
    },
    {
      title: "TimeAndWork",
      question:
        "A is thrice as good as workman as B and therefore is able to finish a job in 60 days less than B. Working together, they can do it in:",
      options: ["20 days", "22 1/2 days", "25 days", "30 days"],
      correctAnswer: "20 days",
    },
    {
      title: "TimeAndWork",
      question:
        "A alone can do a piece of work in 6 days and B alone in 8 days. A and B undertook to do it for Rs. 3200. With the help of C, they completed the work in 3 days. How much is to be paid to C?",
      options: ["Rs. 375", "Rs. 400", "Rs. 600", "Rs. 800"],
      correctAnswer: "Rs. 400",
    },
    {
      title: "CompoundInterest",
      question:
        "A bank offers 5% compound interest calculated on half-yearly basis. A customer deposits Rs. 1600 each on 1st January and 1st July of a year. At the end of the year, the amount he would have gained by way of interest is:",
      options: ["Rs. 120", "Rs. 121", "Rs. 122", "Rs. 123"],
      correctAnswer: "Rs. 123",
    },
    {
      title: "CompoundInterest",
      question:
        "The difference between simple and compound interests compounded annually on a certain sum of money for 2 years at 4% per annum is Re. 1. The sum (in Rs.) is:",
      options: ["625", "630", "640", "650"],
      correctAnswer: "625",
    },
    {
      title: "CompoundInterest",
      question:
        "There is 60% increase in an amount in 6 years at simple interest. What will be the compound interest of Rs. 12,000 after 3 years at the same rate?",
      options: ["Rs. 2160", "Rs. 3120", "Rs. 3972", "Rs. 6240", "None of these"],
      correctAnswer: "Rs. 3120",
    },
    {
      title: "CompoundInterest",
      question:
        "What is the difference between the compound interests on Rs. 5000 for 1 years at 4% per annum compounded yearly and half-yearly?",
      options: ["Rs. 2.04", "Rs. 3.06", "Rs. 4.80", "Rs. 8.30"],
      correctAnswer: "Rs. 4.80",
    },
    {
      title: "CompoundInterest",
      question:
        "The compound interest on Rs. 30,000 at 7% per annum is Rs. 4347. The period (in years) is:",
      options: ["2", "2 1/2", "3", "4"],
      correctAnswer: "2 1/2",
    },
    {
      title: "Partnership",
      question:
        "A and B invest in a business in the ratio 3 : 2. If 5% of the total profit goes to charity and A's share is Rs. 855, the total profit is:",
      options: ["Rs. 1425", "Rs. 1500", "Rs. 1537.50", "Rs. 1576"],
      correctAnswer: "Rs. 1537.50",
    },
    {
      title: "Partnership",
      question:
        "A, B and C jointly thought of engaging themselves in a business venture. It was agreed that A would invest Rs. 6500 for 6 months, B, Rs. 8400 for 5 months and C, Rs. 10,000 for 3 months. A wants to be the working member for which, he was to receive 5% of the profits. The profit earned was Rs. 7400. Calculate the share of B in the profit.",
      options: ["Rs. 1900", "Rs. 2660", "Rs. 2800", "Rs. 2840"],
      correctAnswer: "Rs. 2660",
    },
    {
      title: "Partnership",
      question:
        "A, B and C enter into a partnership in the ratio : : . After 4 months, A increases his share 50%. If the total profit at the end of one year be Rs. 21,600, then B's share in the profit is:",
      options: ["Rs. 2100", "Rs. 2400", "Rs. 3600", "Rs. 4000"],
      correctAnswer: "Rs. 2400",
    },
    {
      title: "Partnership",
      question:
        "A, B, C subscribe Rs. 50,000 for a business. A subscribes Rs. 4000 more than B and B Rs. 5000 more than C. Out of a total profit of Rs. 35,000, A receives:",
      options: ["Rs. 8400", "Rs. 11,900", "Rs. 13,600", "Rs. 14,700"],
      correctAnswer: "Rs. 13,600",
    },
    {
      title: "Partnership",
      question:
        "Three partners shared the profit in a business in the ratio 5 : 7 : 8. They had partnered for 14 months, 8 months and 7 months respectively. What was the ratio of their investments?",
      options: ["5 : 7 : 8", "20 : 49 : 64", "38 : 28 : 21", "None of these"],
      correctAnswer: "20 : 49 : 64",
    },
    {
      title: "ProblemsOnAges",
      question:
        "Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",
      options: ["2 times", "2 1/2 times", "2", "2 3/4 times", "3 times"],
      correctAnswer: "2 3/4 times",
    },
    {
      title: "ProblemsOnAges",
      question:
        "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
      options: ["4 years", "8 years", "10 years", "None of these"],
      correctAnswer: "4 years",
    },
    {
      title: "ProblemsOnAges",
      question:
        "A father said to his son, 'I was as old as you are at the present at the time of your birth'. If the father's age is 38 years now, the son's age five years back was:",
      options: ["14 years", "19 years", "33 years", "38 years"],
      correctAnswer: "14 years",
    },
    {
      title: "ProblemsOnAges",
      question:
        "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
      options: ["7", "8", "9", "10", "11"],
      correctAnswer: "9",
    },
    {
      title: "ProblemsOnAges",
      question:
        "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
      options: ["24", "27", "40", "Cannot be determined", "None of these"],
      correctAnswer: "24",
    },
  ];
  
  export default quizData;
  