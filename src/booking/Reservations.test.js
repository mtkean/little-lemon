import { createInitialTimes, timeReducer} from "./Reservations";

test('Initialize times is not empty', () => {
    expect(createInitialTimes(new Date()).length).toBeGreaterThan(0);
});

test('Reducer times is not empty', () => {
    expect(timeReducer({}, new Date())['availableTimes'].length).toBeGreaterThan(0);
});