import Link from "next/link";
import { Flex, Anchor, Indicator, Text } from "@mantine/core";

const Footer = () => {
	return (
		<footer>
			<Flex
				fz={12}
				justify="center"
				w="100%"
				align="center"
				gap={20}
				mt={50}
				wrap="wrap"
			>
				
				<Link href="/contact" passHref legacyBehavior>
					<Anchor c="gray.6">Contact</Anchor>
				</Link>

				<Text>
                    built by{" "}
					<Anchor
						c="gray.6"
						href="https://x.com/mishra_ashish1"
						target="_blank"
					>
						Ashish Mishra
					</Anchor>
				</Text>
			</Flex>
		</footer>
	);
};

export default Footer;
