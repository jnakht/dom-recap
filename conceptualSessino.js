const arr = [10, 11, 12];

const sum = arr.reduce((acc, curr) => acc+curr, );
console.log(sum);


const person = {
    name: 'jisan', 
    age: 23,
    wife: {
        firstWife: {
            name: 'kajol',
            age: 24,
            children: {
                firstChild: 'simba',
                secondChild: 'samba',
            }
        }

    }
}
const optChaining = person.wife.firstWife.children.firstChild.nephew?.son?.sonOFSon;
console.log(optChaining);