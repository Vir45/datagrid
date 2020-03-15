import faker from 'faker';

const enam = {
	STUDENT: 'student',
	SPECIALSTUDENT: 'special student',
	ACTIVIST: 'activist',
	EXPERIENCESSTUDENT: 'experienced student',
}

const random = (arr) => {
	let rand = Math.random() * (arr.length);
	return (arr[Math.floor(rand)])
}

export const makeFake = (idx) => {
  return {
    "id": idx,
    "position": idx,
		"name": faker.name.findName(),
		"date": faker.date.past(),
    "githubId": faker.internet.email(),
    "locationName": faker.address.city(),
		"score": Number(1653 - Math.floor(idx + Math.random() * 5)),
		"role": random(Object.values(enam)),
		"isActive": Boolean(faker.random.boolean()),
		"companyName": faker.company.companyName(),
		"avatar": faker.internet.avatar()
  };
};

const data = [...new Array(400)].map((item, index) => makeFake(index+1));

export default data;
