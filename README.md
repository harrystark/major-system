# major-system
Npm module which returns word from a number or number from a word based on major system.

# What is a major system?
This mnemonic system is based on the substitution of sounds with digits. With this technique you can represent words by numeric sequences. Since remembering words is far more easy than numbers, this system can be used to easily remember numerical sequences, like telephone numbers or year dates. For the number you want to remember you find corresponding words which you turn into a catchy story. The made up story should be very unusual so it sticks.

Digit |  Letter
----- | ------- 
0     |  s, z
1	    |  t, d, th
2     |	 n
3	    |  m
4	    |  r
5	    |  l
6	    |  j, ch, sh
7	    |  c, k, g, q, ck
8	    |  v, f, ph
9	    |  p, b


-Satellite	S = 0	0
-Satellite	Vowel, ignored.	0
-Satellite	t = 1	01
-Satellite	Vowel, ignored.	01
-Satellite	ll = 5, no double letter	015
-Satellite	Vowel, ignored.	015
-Satellite	t = 1	0151
-Satellite	Vowel, ignored.	0151



