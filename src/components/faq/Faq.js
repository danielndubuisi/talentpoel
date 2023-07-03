import { Collapse } from "antd";

import "./faq.css";

const items = [
  {
    key: "1",
    label: "How do we identify the best non-technical talent in Africa?",
    children: (
      <p>
        When we say we have the best talent, we mean it. Our selection process
        is rigorous, allowing us to carefully choose the top 2% out of
        numerous applicants every quarter. Once selected, these individuals become
        part of our pre-vetted community of technical talent. They undergo
        further training and mentorship to enhance their skills in their
        respective fields. We believe in the importance of diversity of thought,
        which is why we welcome individuals from different backgrounds and
        experiences to join our community.
      </p>
    ),
  },
  {
    key: "2",
    label:
      "Why do organisations need to work with us?",
    children: (
      <p>
        By 2050, Africa is projected to have the largest population of
        working-age adults in the world. With a 22% entrepreneurship rate among
        working-age people, Africa holds significant untapped talent. Our team
        consists of skilled individuals who have a deep understanding of this
        untapped market, not just from a talent perspective but also from a
        legal standpoint when it comes to hiring these individuals. We assist
        organizations in hiring talent in Africa without restrictions. We handle
        payroll, talent legal documentation, and provide guidance on selecting
        the best talent for their teams, eliminating the arduous process that
        organizations typically experience when hiring talent in Africa.
        Additionally, we are among the first companies in Africa to have a
        rigorous process for incorporating non-technical talent into our talent
        network.
      </p>
    ),
  },
  {
    key: "3",
    label: "How do your talents adapt to different time zones?",
    children: (
      <p>
        Our matching process is designed to be flexible, and we work closely
        with our clients to ensure that our talent can work within their
        preferred time zones. We understand the importance of aligning work
        schedules to facilitate effective communication and collaboration across
        different regions.
      </p>
    ),
  },
  {
    key: "4",
    label: "How many hours can the talent work?",
    children: (
      <p>
        The number of hours our talent can work depends on the specific job
        requirements and the agreement between the talent and the employer. We
        can accommodate full-time and part-time arrangements, with different
        hourly commitments. Our aim is to provide flexible options that suit the
        needs of both our talent and the organizations we partner with.
      </p>
    ),
  },
];

const Faq = () => {
  return (
    <section className="layout faq-container">
      <h4>Frequently Asked Questions (FAQ)</h4>
      <Collapse
        accordion
        items={items}
        expandIconPosition="end"
        expandIcon={({ isActive }) =>
          isActive ? (
            <p className="faq-icons">-</p>
          ) : (
            <p className="faq-icons">+</p>
          )
        }
      />
    </section>
  );
};

export default Faq;
