import {expect} from 'chai';
import {Trie} from './trie';
import {isWordTerminationNode} from './util';

describe('Validate Trie Class', () => {
    it('Tests creating a Trie', () => {
        const trie = Trie.create(sampleWords);
        expect(trie).to.be.instanceof(Trie);
    });

    it('Tests getting words from a Trie', () => {
        const trie = Trie.create(sampleWords);
        expect([...trie.words()]).to.be.deep.equal(sampleWords.sort());
    });

    it('Tests seeing if a Trie contains a word', () => {
        const trie = Trie.create(sampleWords);
        expect(trie.has('lift')).to.be.true;
        expect(trie.has('fork-lift')).to.be.false;
    });

    it('Tests complete', () => {
        const trie = Trie.create(sampleWords);
        expect([...trie.complete('lift')]).to.be.deep.equal(sampleWords.filter(w => w.slice(0, 4) === 'lift').sort());
        expect([...trie.complete('life')]).to.be.deep.equal([]);
        expect([...trie.complete('lifting')]).to.be.deep.equal(['lifting']);
    });

    it('Tests iterate', () => {
        const trie = Trie.create(sampleWords);
        const words = [...trie.iterate()]
            .filter(r => isWordTerminationNode(r.node))
            .map(r => r.text);
        expect(words).to.be.deep.equal(sampleWords.sort());
    });
});

const sampleWords = [
    'walk',
    'walked',
    'walker',
    'walking',
    'walks',
    'talk',
    'talks',
    'talked',
    'talker',
    'talking',
    'lift',
    'lifts',
    'lifted',
    'lifter',
    'lifting',
    'journal',
    'journals',
    'journalism',
    'journalist',
    'journalistic',
    'journey',
    'journeyer',
    'journeyman',
    'journeymen',
    'joust',
    'jouster',
    'jousting',
    'jovial',
    'joviality',
    'jowl',
    'jowly',
    'joy',
    'joyful',
    'joyfuller',
    'joyfullest',
    'joyfulness',
    'joyless',
    'joylessness',
    'joyous',
    'joyousness',
    'joyridden',
    'joyride',
    'joyrider',
    'joyriding',
    'joyrode',
    'joystick',
];
