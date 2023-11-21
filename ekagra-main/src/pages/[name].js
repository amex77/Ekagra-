import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Flex } from "@mantine/core";

import Pomodoro from "@/components/Pomodoro";
import Todo from "@/components/Todo";
import Playlist from "@/components/Playlist";
import React from "react";
import Chatbot from "@/components/layout/Chatbot";

const Place = () => {
	const router = useRouter();
	const { name } = router.query;
	const title = `${name}'s place | Ekagra`;

	useEffect(() => {
		const storage = localStorage.getItem("dailyPlaceNames");

		if (storage) {
			const found = storage?.split(",").find(element => element == name);

			if (!found) {
				localStorage.setItem(
					"dailyPlaceNames",
					storage?.concat(",", name)
				);
			}
		} else {
			localStorage.setItem("dailyPlaceNames", name);
		}
	}, [name]);

	
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta
					property="og:image"
					content={`https://daily.place/api/og?title=${title}`}
                    key="ogImage"
				/>
                <meta
					name="twitter:image"
					content={`https://daily.place/api/og?title=${title}`}
                    key="twImage"
				/>
			</Head>

			<Flex direction="column" justify="space-between" w="100%">
				<div>
					<Flex
						gap={50}
						my={50}
						w="100%"
						sx={_ => ({
							"@media (max-width: 680px)": {
								flexDirection: "column",
							},
						})}
					>
						<Pomodoro name={name} title={title} />
						<Todo name={name} />
					</Flex>

					<Flex w="100%">
						<Playlist />
					</Flex>
				</div>

				<div></div>
			</Flex>
		</>
	);
};

export default Place;
