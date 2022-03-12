--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: justin
--

COPY public.contacts (id, type, "firstName", "lastName", "primaryNumber", "secondaryNumber", text, email, website, address, notes) FROM stdin;
1	client	tim	tebow	666666666	777777777	t	\N	\N	\N	asdfasdfasdfadsf
2	client	justin	v	11111111	22222222	f	\N	\N	\N	aacccccccccccccc
\.


--
-- Data for Name: animals; Type: TABLE DATA; Schema: public; Owner: justin
--

COPY public.animals (id, "contactsId", "animalType", "otherTypeDetail", image, name, color, breed, sex, notes, birthday, active, rating, height, weight, length, "neckGirth", "bellyGirth", "sitOnLeash", "sitOffLeash", "standOnLeash", "standOffLeash", "downOnLeash", "downOffLeash", "barkOnCommand", "holdItem", "offLeashTrained", "goodAroundChildren", "otherDogs", "smallAnimals", "atDistanceFromTrainer", "silentCommands", mark, "loudNoiseLights", "shortNotice", "livesClose", overnight, "strangerHandle", "strangerDress") FROM stdin;
2	2	dog	g	https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/alaskan-malamute-32827.jpeg	Bear	black	2	Male	Bear is super derp	2022-03-10	t	5	8	85	8	8	8	t	t	t	t	t	t	t	t	t	t	t	f	f	f	f	t	f	t	t	f	f
1	1	dog	a	https://vetstreet-brightspot.s3.amazonaws.com/a1/559f30a80911e0a0d50050568d634f/file/goldendoodle-1-645mk070411.jpg	tom	Brown	1	Male	Tom is a great dog	2022-03-07	t	5	5	50	5	5	5	t	t	t	f	f	f	t	t	f	t	t	f	t	t	t	t	f	f	f	t	t
\.


--
-- Data for Name: auditions; Type: TABLE DATA; Schema: public; Owner: justin
--

COPY public.auditions (id, "animalsId", date) FROM stdin;
1	1	2022-03-09
\.


--
-- Data for Name: jobs; Type: TABLE DATA; Schema: public; Owner: justin
--

COPY public.jobs (id, description, date, client, active, notes, "jobNumber") FROM stdin;
5	this is a new job 	2022-03-09	New job	t	testing the cascade delete and active default	AA!!!!!!!111
6	1agagdfgsdfg	\N	bbbbb	t	what wahat 	4555555
2	new description 	2022-03-30	this  new client	f	new notes@@@@	new jobnumber@@
\.


--
-- Data for Name: jobContacts; Type: TABLE DATA; Schema: public; Owner: justin
--

COPY public."jobContacts" (id, "jobId", "contactId") FROM stdin;
\.


--
-- Data for Name: jobsJunction; Type: TABLE DATA; Schema: public; Owner: justin
--

COPY public."jobsJunction" (id, "animalsId", "jobId", paid, "checkNumber", "checkAmount", "checkDate") FROM stdin;
2	1	2	f	200200200	120000	2022-03-08
3	1	5	f	3333333	3000	2022-03-09
5	2	2	f	454545454545	4555222	2022-03-10
4	1	2	t	76767676	90909090	2022-03-30
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: justin
--

COPY public."user" (id, username, password) FROM stdin;
1	Justin	$2a$10$Jx/lN0ssE40k72srVxpyceQxke8g/KiAUTdqVroNZZgrSm2dawzz2
\.


--
-- Name: animals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: justin
--

SELECT pg_catalog.setval('public.animals_id_seq', 1, false);


--
-- Name: auditions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: justin
--

SELECT pg_catalog.setval('public.auditions_id_seq', 1, false);


--
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: justin
--

SELECT pg_catalog.setval('public.contacts_id_seq', 1, false);


--
-- Name: jobContacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: justin
--

SELECT pg_catalog.setval('public."jobContacts_id_seq"', 1, false);


--
-- Name: jobsJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: justin
--

SELECT pg_catalog.setval('public."jobsJunction_id_seq"', 1, false);


--
-- Name: jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: justin
--

SELECT pg_catalog.setval('public.jobs_id_seq', 7, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: justin
--

SELECT pg_catalog.setval('public.user_id_seq', 1, true);


--
-- PostgreSQL database dump complete
--

