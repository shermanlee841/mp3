import styled from "styled-components";

const Page = styled.div`
    width: 100%;
`;

export default function Experience() {
    return (
        <Page>
            <h2>Experience</h2>

            <section>
                <h2>Global Career Accelerator | SQL and Python</h2>
                <p><strong>May 2026 - July 2026</strong></p>
                <ul>
                    <li>
                        Drove SQL-based sustainability analysis for Intel by joining device and impact data,
                        engineering age cohorts, and segmenting by region to quantify energy savings.
                    </li>
                    <li>
                        Analyzed construction job and weather datasets using subqueries and joins to identify
                        regional demand surges linked to severe weather.
                    </li>
                    <li>
                        Analyzed Web analytics data for Grammy.com and RecordingAcademy.com to evaluate the impact
                        of a website split on user engagement.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Real Estate Marketing Coordinator | CIG Corp: Realty and Loans</h2>
                <p><strong>September 2024 - December 2024</strong></p>
                <ul>
                    <li>
                        Created digital marketing content and worked with social media and website management.
                    </li>
                    <li>
                        Managed digital advertising budgets for social engines including Facebook Advertising.
                    </li>
                    <li>
                        Supported weekly listing announcements, signage requests, marketing collateral, and project deadlines.
                    </li>
                    <li>
                        Utilized MLS systems, Microsoft Office Suite, and WordPress for content management and data organization.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Swim Team Captain | Burlingame Aquatics Club</h2>
                <p><strong>2023 - 2024</strong></p>
                <ul>
                    <li>
                        Led quarterly team meetings to facilitate feedback and strengthen communication between
                        coaching staff and athletes.
                    </li>
                    <li>
                        Partnered with coaches in weekly team meetings to improve team cohesion and refine practice
                        planning and expectation of athletes.
                    </li>
                    <li>
                        Promoted accountability, sportsmanship, and discipline.
                    </li>
                </ul>
            </section>
        </Page>
    );
}