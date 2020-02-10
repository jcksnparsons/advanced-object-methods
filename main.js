const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";

const doctorBill = {
  officeName: "Heritage Medical Associates",
  streetAddress: "222 22nd Ave., Nashville, TN 37203",
  doctorName: "Dr. Nicole Baggott",
  patientName: "Jack Parsons",
  visitDate: "02/10/2020",
  amountBilled: 38.0,
  dueDate: "03/31/2020"
};

/* console.log(doctorBill[dateVisited]);
console.log(doctorBill[owed]);
console.log(doctorBill[patient]); */

/* for (const value of Object.values(doctorBill)) {
  console.log(value);
} */

console.log("---------------");

for (const key of Object.keys(doctorBill)) {
  console.log(key);
}
